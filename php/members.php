<?php
require 'conn.php';
$sql = "SELECT * FROM `recruit`";
$result = $conn->query($sql);
$json = array(
    'status' => 0,
    'desserts' => array(
        "office" => [],
        "media" => [],
        "editor" => [],
        "echo" => [],
        "bird" => [],
    )
);

if ($result) {
    $json['status'] = 1;
    while ($row = $result->fetch_assoc()) {
        $member = array(
            "name" => $row['name'],
            "tel" => $row["tel"],
            "uid" => $row["uid"],
            "qq" => $row["qq"]
        );
        $list = ['office', 'editor', 'media', 'echo', 'bird'];
        foreach ($list as $val)
            if ($row[$val] != "0") array_push($json['desserts'][$val], $member);
    }
}

echo json_encode($json);
