package db

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_redis "github.com/go-redis/redis/v7"
	_ "github.com/lib/pq" //import postgres
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

// DB ...
type DB struct {
	*sql.DB
}

var db *gorm.DB

// Init ...
func Init() {

	dbInfo := fmt.Sprintf("user=%s password=%s dbname=%s sslmode=disable", os.Getenv("DB_USER"), os.Getenv("DB_PASS"), os.Getenv("DB_NAME"))

	var err error
	db, err := ConnectDB(dbInfo)
	if err != nil {
		log.Fatal(err)
	}

	sqlDB, err := db.DB()
	if err != nil {
		log.Fatal(err)
	}
	if err := sqlDB.Ping(); err != nil {
		log.Fatal(err)
	}

}

// ConnectDB ...
func ConnectDB(dataSourceName string) (*gorm.DB, error) {
	gormDb, err := gorm.Open(postgres.Open(dataSourceName), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		return nil, err
	}

	return gormDb, nil
}

// GetDB ...
func GetDB() *gorm.DB {
	return db
}

// RedisClient ...
var RedisClient *_redis.Client

// InitRedis ...
func InitRedis(selectDB ...int) {

	var redisHost = os.Getenv("REDIS_HOST")
	var redisPassword = os.Getenv("REDIS_PASSWORD")

	RedisClient = _redis.NewClient(&_redis.Options{
		Addr:     redisHost,
		Password: redisPassword,
		DB:       selectDB[0],
		// DialTimeout:        10 * time.Second,
		// ReadTimeout:        30 * time.Second,
		// WriteTimeout:       30 * time.Second,
		// PoolSize:           10,
		// PoolTimeout:        30 * time.Second,
		// IdleTimeout:        500 * time.Millisecond,
		// IdleCheckFrequency: 500 * time.Millisecond,
		// TLSConfig: &tls.Config{
		// 	InsecureSkipVerify: true,
		// },
	})

}

// GetRedis ...
func GetRedis() *_redis.Client {
	return RedisClient
}
