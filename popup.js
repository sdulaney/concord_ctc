(function() {
  function o() {
    var o = localStorage.getItem("sipProtocol");
    $("#" + o).attr("checked", true);
    if (localStorage.getItem("sipCallerAnyProtocol")) {
      $("#sipCallerAnyProtocol").val(localStorage.getItem("sipCallerAnyProtocol"));
    }
    if (localStorage.getItem("sipCallerGetUsername")) {
      $("#sipCallerGetUsername").val(localStorage.getItem("sipCallerGetUsername"));
    }
    if (localStorage.getItem("sipCallerGetPassword")) {
      $("#sipCallerGetPassword").val(localStorage.getItem("sipCallerGetPassword"));
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
    o();
    $("#options").on("change", function() {
      var o = $("#options input[name=protocol]:checked").attr("id");
      console.log(o);
      localStorage.setItem("sipProtocol", o);
    });
    $("#sipCallerAnyProtocol").on("change", function() {
      localStorage.setItem("sipCallerAnyProtocol", $("#sipCallerAnyProtocol").val());
    });
    $("#sipCallerGetUsername").on("change", function() {
      localStorage.setItem("sipCallerGetUsername", $("#sipCallerGetUsername").val());
    });
    $("#sipCallerGetPassword").on("change", function() {
      localStorage.setItem("sipCallerGetPassword", $("#sipCallerGetPassword").val());
    });
  });
})();
