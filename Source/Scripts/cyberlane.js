var ViewModel = function () {
    var root = this;
    root.twitter = {
        tweets: ko.observableArray([]),
        Refresh: function () {
            $.ajax({
                type: "POST",
                url: "DataServices.asmx/GetLatestTweets",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                success: function (data) {
                    tweets = ko.mapping.fromJS(data.d);
                }
            });
        }
    };
    return root;
}
var viewModel = new ViewModel();

$(function () {
    ko.applyBindings(viewModel.twitter, document.getElementById("tweets"));
    viewModel.twitter.Refresh();
});