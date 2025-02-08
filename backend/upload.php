The script accepts data, saves the image in the uploads/ folder and writes the data to the database.


<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$host = "localhost";
$dbname = "your_database";
$username = "your_user";
$password = "your_password";

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $place = $_POST["place"];
    $description = $_POST["description"];

    if (!isset($_FILES["photo"])) {
        echo json_encode(["success" => false, "message" => "Файл не загружен"]);
        exit;
    }

    $uploadDir = "uploads/";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }

    $fileName = basename($_FILES["photo"]["name"]);
    $filePath = $uploadDir . $fileName;

    if (move_uploaded_file($_FILES["photo"]["tmp_name"], $filePath)) {
        $stmt = $conn->prepare("INSERT INTO uploads (name, place, description, filename, filepath) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $name, $place, $description, $fileName, $filePath);
        $stmt->execute();
        $stmt->close();

        echo json_encode(["success" => true, "image" => $fileName]);
    } else {
        echo json_encode(["success" => false, "message" => "Ошибка при загрузке"]);
    }
}

$conn->close();
?>
