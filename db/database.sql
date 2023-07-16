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

\ connect cpp_db
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
CREATE TABLE "follow" (
  "following_user_id" integer,
  "followed_user_id" integer,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "user" (
  "id" char(36) PRIMARY KEY,
  "email" text,
  "phone" text,
  "name" text,
  "age" integer,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "rank" (
  "id" char(36) PRIMARY KEY,
  "user_id" char(36),
  "before" integer,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "chapter" (
  "id" char(36) PRIMARY KEY,
  "name" text,
  "description" text,
  "level" integer,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "lesson" (
  "id" char(36) PRIMARY KEY,
  "chapter_id" char(36),
  "name" text,
  "tags" []text,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "question" (
  "id" char(36) PRIMARY KEY,
  "lesson_id" char(36),
  "order" integer,
  "score" []integer,
  "answer_type" text,
  "answer_content" []text,
  "question_content" text,
  "required" bool,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "question_answer" (
  "id" char(36) PRIMARY KEY,
  "lesson_answer_id" char(36),
  "question_id" char(36),
  "score" integer,
  "answer" text,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "updated_at" timestamp NOT NULL DEFAULT (now())
);

CREATE TABLE "lesson_answer" (
  "id" char(36) PRIMARY KEY,
  "user_id" char(36),
  "lesson_id" char(36),
  "total_score" integer,
  "created_at" timestamp NOT NULL DEFAULT (now()),
  "updated_at" timestamp NOT NULL DEFAULT (now())
);

ALTER TABLE "follow" ADD FOREIGN KEY ("following_user_id") REFERENCES "user" ("id");

ALTER TABLE "follow" ADD FOREIGN KEY ("followed_user_id") REFERENCES "user" ("id");

ALTER TABLE "rank" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "lesson" ADD FOREIGN KEY ("chapter_id") REFERENCES "chapter" ("id");

ALTER TABLE "question" ADD FOREIGN KEY ("lesson_id") REFERENCES "lesson" ("id");

ALTER TABLE "question_answer" ADD FOREIGN KEY ("lesson_answer_id") REFERENCES "lesson_answer" ("id");

ALTER TABLE "question_answer" ADD FOREIGN KEY ("question_id") REFERENCES "question" ("id");

ALTER TABLE "lesson_answer" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("id");

ALTER TABLE "lesson_answer" ADD FOREIGN KEY ("lesson_id") REFERENCES "lesson" ("id");

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