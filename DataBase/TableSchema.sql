CREATE TABLE `tb_user` (
  `user_id` varchar(20) NOT NULL,
  `user_password` varchar(20) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `user_email` varchar(20) UNIQUE NOT NULL,
  `user_birth_date` date NOT NULL,
  `enabled` tinyint(1) DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tb_authorities` (
  `user_id` varchar(20) NOT NULL,
  `authority` varchar(20) DEFAULT 'ROLE_USER',
  PRIMARY KEY(`user_id`,`authority`),
  FOREIGN KEY (`user_id`) REFERENCES tb_user(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

create table `tb_collection`(
`user_id` varchar(20) not null,
`col_name` varchar(20) not null,
`music_name` varchar(20) not null,
`singer` varchar(20) not null,
PRIMARY KEY(`user_id`,`col_name`),
FOREIGN KEY(`user_id`) REFERENCES tb_user(`user_id`)
) ENGINE=INNODB DEFAULT CHARSET=utf8;



