(function dsbuilder(attr) {
    var urlBuilder = "jdbc:trino://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "/" + attr[connectionHelper.attributeDatabase] + "?";
//    var urlBuilder = "jdbc:trino://" + attr[connectionHelper.attributeServer] + ":" + attr[connectionHelper.attributePort] + "?";

    return [urlBuilder];
})
