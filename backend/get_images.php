

The script returns a list of loaded images and their data.
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$host = "localhost";
$dbname = "your_database";
$username = "your_user";
$password = "your_password";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

$sql = "SELECT id, name, place, description, filename FROM uploads ORDER BY uploaded_at DESC";
$result = $conn->query($sql);

$images = [];
while ($row = $result->fetch_assoc()) {
    $images[] = [
        "id" => $row["id"],
        "name" => $row["name"],
        "place" => $row["place"],
        "description" => $row["description"],
        "filename" => $row["filename"],
        "url" => "http://localhost/uploads/" . $row["filename"]
    ];
}

echo json_encode(["images" => $images]);

$conn->close();
?>
