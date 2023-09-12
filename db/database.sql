--
-- PostgreSQL database dump
--
SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
--
-- Name: cpp_db; Type: DATABASE; Schema: -; Owner: postgres
--
DROP DATABASE cpp_db;
CREATE DATABASE cpp_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';
ALTER DATABASE cpp_db OWNER TO postgres;
\ connect cpp_db
SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--
COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';
SET search_path = public,
    pg_catalog;
SET default_tablespace = '';
SET default_with_oids = false;
--
--
--
CREATE TABLE "follows" (
    "following_user_id" char(36),
    "followed_user_id" char(36),
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "users" (
    "id" char(36) PRIMARY KEY,
    "email" text,
    "phone" text,
    "name" text,
    "avatar" text,
    "birth" text,
    "score" integer,
    "current_lesson" char(36),
    "verified" bool,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "user_tokens" (
    "user_id" char(36) PRIMARY KEY,
    "access_token" text,
    "access_token_expires_in" integer,
    "refresh_token" text,
    "refresh_token_expires_in" integer,
    "verified_at" timestamp,
);
CREATE TABLE "chapters" (
    "id" char(36) PRIMARY KEY,
    "name" text,
    "description" text,
    "level" integer,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "lessons" (
    "id" char(36) PRIMARY KEY,
    "chapter_id" char(36),
    "name" text,
    --practice or lecture
    "type" text,
    "level" integer,
    "score" integer,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "questions" (
    "id" char(36) PRIMARY KEY,
    "lesson_id" char(36),
    "question_content" text,
    "answer_content" text [],
    "score" integer [],
    "answer_type" text,
    "level" integer,
    "required" bool,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "lectures" (
    "id" char(36) PRIMARY KEY,
    "lesson_id" char(36),
    "level" integer,
    "type" text,
    --text/code/image
    "content" text,
    "required" bool,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "question_answers" (
    "id" char(36) PRIMARY KEY,
    "lesson_answer_id" char(36),
    "question_id" char(36),
    "answer" text [],
    "score" integer,
    "is_true" bool,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "lesson_answers" (
    "id" char(36) PRIMARY KEY,
    "user_id" char(36),
    "lesson_id" char(36),
    "score" integer,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
ALTER TABLE "user_tokens"
ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "follows"
ADD FOREIGN KEY ("following_user_id") REFERENCES "users" ("id");
ALTER TABLE "follows"
ADD FOREIGN KEY ("followed_user_id") REFERENCES "users" ("id");
ALTER TABLE "lessons"
ADD FOREIGN KEY ("chapter_id") REFERENCES "chapters" ("id");
ALTER TABLE "questions"
ADD FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id");
ALTER TABLE "lectures"
ADD FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id");
ALTER TABLE "question_answers"
ADD FOREIGN KEY ("lesson_answer_id") REFERENCES "lesson_answers" ("id");
ALTER TABLE "question_answers"
ADD FOREIGN KEY ("question_id") REFERENCES "questions" ("id");
ALTER TABLE "lesson_answers"
ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");
ALTER TABLE "lesson_answers"
ADD FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id");
----
CREATE TABLE "problems" (
    "id" char(36) PRIMARY KEY,
    "title" text,
    "description" text,
    "level" text,
    "url" text UNIQUE,
    "available_code" text,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "solutions" (
    "id" char(36) PRIMARY KEY,
    "problem_id" char(36) NOT NULL,
    "code" text NOT NULL,
    "language" varchar(20) NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
CREATE TABLE "submissions" (
    "id" char(36) PRIMARY KEY,
    "user_id" char(36) NOT NULL,
    "problem_id" char(36) NOT NULL,
    "solution_id" char(36) NOT NULL,
    "status" varchar(10) NOT NULL CHECK (
        "status" IN (
            'Accepted',
            'Wrong Answer',
            'Time Limit Exceeded',
            'Runtime Error'
        )
    ),
    "time" real NOT NULL,
    "memory" real NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);
ALTER TABLE "solutions"
ADD FOREIGN KEY (problem_id) REFERENCES "problems" (id);
ALTER TABLE "submissions"
ADD FOREIGN KEY ("user_id") REFERENCES "users" (id);
ALTER TABLE "submissions"
ADD FOREIGN KEY ("problem_id") REFERENCES "problems" (id);
ALTER TABLE "submissions"
ADD FOREIGN KEY ("solution_id") REFERENCES "solutions" (id);
----
--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--
REVOKE ALL ON SCHEMA public
FROM PUBLIC;
REVOKE ALL ON SCHEMA public
FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;
--
-- PostgreSQL database dump complete
- -