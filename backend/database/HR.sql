-- MySQL Workbench Synchronization
-- Generated: 2023-04-29 20:38
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Ви

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

CREATE SCHEMA IF NOT EXISTS `db_hr` DEFAULT CHARACTER SET utf8 ;

USE db_hr;

CREATE TABLE IF NOT EXISTS `db_hr`.`Worker` (
  `fio` VARCHAR(70) NOT NULL,
  `birthdate` DATE NOT NULL,
  `gender` VARCHAR(7) NOT NULL,
  `address` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(12) NULL DEFAULT NULL,
  `post_name` VARCHAR(50) NULL DEFAULT NULL,
  `status` VARCHAR(11) NOT NULL,
  `reason` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`fio`),
  INDEX `fk_Worker_Post1_idx` (`post_name` ASC) VISIBLE,
  CONSTRAINT `fk_Worker_Post1`
    FOREIGN KEY (`post_name`)
    REFERENCES `db_hr`.`Post` (`post_name`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `db_hr`.`Post` (
  `dept_name` VARCHAR(45) NOT NULL,
  `post_name` VARCHAR(50) NOT NULL,
  `salary` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`post_name`),
  INDEX `fk_Post_Dept1_idx` (`dept_name` ASC) VISIBLE,
  CONSTRAINT `fk_Post_Dept1`
    FOREIGN KEY (`dept_name`)
    REFERENCES `db_hr`.`Dept` (`dept_name`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `db_hr`.`Dept` (
  `dept_name` VARCHAR(45) NOT NULL,
  `fio_chief` VARCHAR(70) NOT NULL,
  PRIMARY KEY (`dept_name`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `db_hr`.`Vacation` (
  `id_vacation` INT(11) NOT NULL,
  `worker_fio` VARCHAR(70) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `status` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`id_vacation`),
  INDEX `fk_Vacation_Worker1_idx` (`worker_fio` ASC) VISIBLE,
  CONSTRAINT `fk_Vacation_Worker1`
    FOREIGN KEY (`worker_fio`)
    REFERENCES `db_hr`.`Worker` (`fio`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `db_hr`.`Contract` (
  `id_contract` INT(11) NOT NULL AUTO_INCREMENT,
  `worker_fio` VARCHAR(70) NOT NULL,
  `date_of_employment` DATE NOT NULL,
  `date_of_dismissal` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id_contract`),
  INDEX `fk_Contract_Worker1_idx` (`worker_fio` ASC) VISIBLE,
  CONSTRAINT `fk_Contract_Worker1`
    FOREIGN KEY (`worker_fio`)
    REFERENCES `db_hr`.`Worker` (`fio`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `db_hr`.`Sick` (
  `id_sick` INT(11) NOT NULL,
  `worker_fio` VARCHAR(70) NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id_sick`),
  INDEX `fk_Sick_Worker1_idx` (`worker_fio` ASC) VISIBLE,
  CONSTRAINT `fk_Sick_Worker1`
    FOREIGN KEY (`worker_fio`)
    REFERENCES `db_hr`.`Worker` (`fio`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO Dept (dept_name, fio_chief) VALUES
('Отдел продаж', 'Иванов Иван Иванович'),
('Отдел закупок', 'Петров Петр Петрович'),
('Отдел маркетинга', 'Сидорова Анна Александровна'),
('Отдел кадров', 'Козлова Елена Владимировна'),
('Отдел разработки', 'Смирнов Дмитрий Сергеевич');
INSERT INTO Post (dept_name, post_name, salary) VALUES
('Отдел закупок', 'Менеджер по закупкам', '90000'),
('Отдел закупок', 'Аналитик по закупкам', '80000'),
('Отдел разработки', 'Разработчик', '120000'),
('Отдел разработки', 'Тестировщик', '70000'),
('Отдел продаж', 'Менеджер по продажам', '90000'),
('Отдел продаж', 'Ключевой менеджер по продажам', '200000'),
('Отдел маркетинга', 'Менеджер по маркетингу', '100000'),
('Отдел маркетинга', 'Специалист по цифровому маркетингу', '90000'),
('Отдел кадров', 'HR-менеджер', '80000'),
('Отдел кадров', 'Специалист по оценке персонала', '120000');
INSERT INTO Worker (fio, birthdate, gender, address, phone, post_name, `status`, reason) VALUES 
('Сорокин Егор Андреевич', '1994-08-10', 'мужской', 'г. Симферополь, ул. Севастопольская, д. 12', '+79788993864', 'Разработчик', 'Работает', null),
('Маматов Сейдамет Русланович', '1992-09-25', 'мужской', 'г. Симферополь, ул. Училищная, д. 16', '+79781962814', 'HR-менеджер', 'Работает', null),
('Бойченко Вероника Сергеевна', '1996-04-23', 'женский', 'г. Симферополь, ул. Севастопольская, д. 21', '+79784354312', 'Менеджер по закупкам', 'Работает', null),
('Мартышина Ольга Александровна', '1991-03-27', 'женский', 'г. Симферополь, ул. Сакская, д. 9', '+79784506754', 'Менеджер по продажам', 'Работает', null),
('Браилов Аким Эмильевич', '1991-04-13', 'мужской', 'г. Симферополь, ул. Сакская, д. 17', '+79782354567', 'Специалист по цифровому маркетингу', 'Работает', null),
('Юрьева Маргарита Руслановна', '1992-09-02', 'женский', 'г. Симферополь, ул. Севастопольская, д. 34', '+79783423242', 'Специалист по оценке персонала', 'Работает', null),
('Артюшкина Анна Дмитриевна', '1994-06-05', 'женский', 'г. Симферополь, ул. Севастопольская, д. 43', '+79785677454', 'Ключевой менеджер по продажам', 'Работает', null),
('Родин Максим Алексеевич', '1995-03-12', 'мужской', 'г. Симферополь, ул. Сакская, д. 15', '+79788996437', 'Тестировщик', 'Работает', null),
('Яковчук Елена Владимировна', '1996-09-16', 'женский', 'г. Симферополь, ул. Севастопольская, д. 12', '+79783457652', 'Аналитик по закупкам', 'Работает', null),
('Рыль Никита Андреевич', '1995-12-27', 'мужской', 'г. Симферополь, ул. Дунайская, д. 12', '+79786548876', 'Менеджер по маркетингу', 'Работает', null),
('Авагян Давид Грагатович', '1995-12-23', 'мужской', 'г. Севастополь, ул. Симферопольская, д. 13', '+79783556498', 'Разработчик', 'Не работает', 'По собственному желанию.');
INSERT INTO Contract (worker_fio, date_of_employment, date_of_dismissal) VALUES
('Бойченко Вероника Сергеевна', '2022-02-02', null),
('Яковчук Елена Владимировна', '2022-02-02', null),
('Сорокин Егор Андреевич', '2022-09-23', null),
('Родин Максим Алексеевич', '2022-06-24', null),
('Мартышина Ольга Александровна', '2022-09-23', null),
('Артюшкина Анна Дмитриевна', '2022-08-11', null),
('Маматов Сейдамет Русланович', '2022-09-25', null),
('Юрьева Маргарита Руслановна', '2022-10-21', null),
('Рыль Никита Андреевич', '2022-12-01', null),
('Браилов Аким Эмильевич', '2022-02-25', null),
('Авагян Давид Грагатович', '2022-03-15', '2022-09-20');
INSERT INTO Sick (worker_fio, start_date, end_date) VALUES
('Сорокин Егор Андреевич', '2023-02-07', '2023-02-14'),
('Артюшкина Анна Дмитриевна', '2023-01-18', '2023-02-21'),
('Маматов Сейдамет Русланович', '2023-03-01', '2023-03-07'),
('Сорокин Егор Андреевич', '2023-03-10', '2023-03-16');
INSERT INTO Vacation (worker_fio, start_date, end_date, `status`) VALUES
('Бойченко Вероника Сергеевна', '2023-04-01', '2023-05-01', 'Одобрено'),
('Рыль Никита Андреевич', '2023-02-01', '2023-03-01', 'Одобрено'),
('Браилов Аким Эмильевич', '2023-04-01', '2023-05-01', 'Отклонено'),
('Родин Максим Алексеевич', '2023-05-01', '2023-06-01', 'Одобрено');