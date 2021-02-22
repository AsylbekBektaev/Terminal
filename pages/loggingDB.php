<?php

require_once "loggingConfig.php";

$db = new mysqli($servername, $username, $password, $dbname);

if ($db->connect_error) {
    die("Error: {$db->connect_error}");
}

$sql = <<<SQL
CREATE DATABASE IF NOT EXISTS terminal;

CREATE TABLE IF NOT EXISTS logging(
    id INT(11) NOT NULL AUTO_INCREMENT,
    amount DOUBLE(11,2) NOT NULL DEFAULT 0,
    data TEXT,
    serviceName VARCHAR(255) NOT NULL,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
) ENGINE=MyISAM CHARSET=utf8;

CREATE DATABASE IF NOT EXISTS mylog;

CREATE TABLE IF NOT EXISTS ids(
    id INT(11) NOT NULL AUTO_INCREMENT,
    msg TEXT,
    tid VARCHAR(255) NOT NULL,
    ref VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
) ENGINE=MyISAM CHARSET=utf8;
SQL;

$query = $db->query($sql);

if (!$query) {
    die("Error: {$db->error}");
}

$db->close();
