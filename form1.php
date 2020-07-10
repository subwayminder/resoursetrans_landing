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

if ($err) {
    echo json_encode($err);
    die();
}

$el = new CIBlockElement;
$PROP = [];
$PROP[55] = $postJson['name'];
$PROP[56] = $postJson['phone'];
$PROP[57] = $postJson['text'];

$arLoadProductArray = array(
    "IBLOCK_ID" => 9,
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