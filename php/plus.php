<?php
$plus = $_POST["plus"];
$uid = $_POST["uid"];
$name = $_POST["name"];

$office = in_array("office", $plus) ? "未面试" : 0;
$editor = in_array("editor", $plus) ? "未面试" : 0;
$media = in_array("media", $plus) ? "未面试" : 0;
$echo = in_array("echo", $plus) ? "未面试" : 0;
$bird = in_array("bird", $plus) ? "未面试" : 0;

require 'conn.php';

$sql = "UPDATE `recruit` SET
        `office`=IF(`office`!='0', `office`, '$office'),
        `media`=IF(`media`!='0', `media`, '$media'),
        `editor`=IF(`editor`!='0', `editor`, '$editor'),
        `echo`=IF(`echo`!='0', `echo`, '$echo'),
        `bird`=IF(`bird`!='0', `bird`, '$bird')
        WHERE `uid`='$uid' AND `name`='$name'";
$result = $conn->query($sql);
if ($result) echo 1;
else echo 0;
