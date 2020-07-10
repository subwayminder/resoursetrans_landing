<?php
require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");
CModule::IncludeModule('iblock');
$post_data = file_get_contents('php://input');
$postJson = json_decode($post_data, true);

if ($postJson['name'] == '') {
    $err = $resp = [
        "status" => "error",
        "data" => 'Name is missing'
    ];
} elseif ($postJson['phone'] == '') {
    $err = $resp = [
        "status" => "error",
        "data" => 'Phone is missing'
    ];
} elseif ($postJson['text'] == '') {
    $err = $resp = [
        "status" => "error",
        "data" => 'Text is missing'
    ];
}
elseif ($postJson['time'] == '') {
    $err = $resp = [
        "status" => "error",
        "data" => 'Time is missing'
    ];
}

if ($err) {
    echo json_encode($err);
    die();
}

$el = new CIBlockElement;
$PROP = [];
$PROP[58] = $postJson['name'];
$PROP[59] = $postJson['phone'];
$PROP[60] = $postJson['text'];
$PROP[61] = $postJson['text'];

$arLoadProductArray = array(
    "IBLOCK_ID" => 10,
    "PROPERTY_VALUES" => $PROP,
    "NAME" => $postJson['phone'],
);

if($PRODUCT_ID = $el->Add($arLoadProductArray)){
    echo json_encode(['status' => 'success']);
}
else
    echo json_encode(
        [
            'status' => 'error',
            'error' => $el->LAST_ERROR
        ]);
?>