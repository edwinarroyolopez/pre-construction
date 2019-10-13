create table course
(
    uuid_course     text not null
        constraint course_pkey
            primary key,
    title       text,
    teacher     text,
    description text,
    topic       text,
    created_at  timestamp with time zone,
    updated_at  timestamp with time zone
);


create table student
(
    uuid_student     text not null
        constraint student_pkey
            primary key,
    name       text,
    email     text,
    created_at  timestamp with time zone,
    updated_at  timestamp with time zone
);



ALTER TABLE course ADD COLUMN students jsonb;
ALTER TABLE course ADD COLUMN level text;