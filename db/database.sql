--
-- PostgreSQL database dump
--
SET
    statement_timeout = 0;

SET
    lock_timeout = 0;

SET
    client_encoding = 'UTF8';

SET
    standard_conforming_strings = on;

SET
    check_function_bodies = false;

SET
    client_min_messages = warning;

--
-- Name: cpp_db; Type: DATABASE; Schema: -; Owner: postgres
--
DROP DATABASE cpp_db;

CREATE DATABASE cpp_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8';

ALTER DATABASE cpp_db OWNER TO postgres;

postgres = # \connect cpp_db
SET
    statement_timeout = 0;

SET
    lock_timeout = 0;

SET
    client_encoding = 'UTF8';

SET
    standard_conforming_strings = on;

SET
    check_function_bodies = false;

SET
    client_min_messages = warning;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner:
--
CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner:
--
COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';

SET
    search_path = public,
    pg_catalog;

SET
    default_tablespace = '';

SET
    default_with_oids = false;

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
    "password" text,
    "phone" text,
    "name" text,
    "age" integer,
    "score" integer,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
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
    "type" text,
    "tags" text [],
    "score" integer,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "questions" (
    "id" char(36) PRIMARY KEY,
    "lesson_id" char(36),
    "order" integer,
    "score" integer [],
    "answer_type" text,
    "answer_content" text [],
    "question_content" text,
    "required" bool,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "question_answers" (
    "id" char(36) PRIMARY KEY,
    "lesson_answer_id" char(36),
    "question_id" char(36),
    "score" integer,
    "answer" text,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "lesson_answers" (
    "id" char(36) PRIMARY KEY,
    "user_id" char(36),
    "lesson_id" char(36),
    "total_score" integer,
    "created_at" timestamp NOT NULL DEFAULT (now()),
    "updated_at" timestamp NOT NULL DEFAULT (now())
);

ALTER TABLE
    "follows"
ADD
    FOREIGN KEY ("following_user_id") REFERENCES "users" ("id");

ALTER TABLE
    "follows"
ADD
    FOREIGN KEY ("followed_user_id") REFERENCES "users" ("id");

ALTER TABLE
    "lessons"
ADD
    FOREIGN KEY ("chapter_id") REFERENCES "chapters" ("id");

ALTER TABLE
    "questions"
ADD
    FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id");

ALTER TABLE
    "question_answers"
ADD
    FOREIGN KEY ("lesson_answer_id") REFERENCES "lesson_answers" ("id");

ALTER TABLE
    "question_answers"
ADD
    FOREIGN KEY ("question_id") REFERENCES "questions" ("id");

ALTER TABLE
    "lesson_answers"
ADD
    FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE
    "lesson_answers"
ADD
    FOREIGN KEY ("lesson_id") REFERENCES "lessons" ("id");

--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--
REVOKE ALL ON SCHEMA public
FROM
    PUBLIC;

REVOKE ALL ON SCHEMA public
FROM
    postgres;

GRANT ALL ON SCHEMA public TO postgres;

GRANT ALL ON SCHEMA public TO PUBLIC;

--
-- PostgreSQL database dump complete
--