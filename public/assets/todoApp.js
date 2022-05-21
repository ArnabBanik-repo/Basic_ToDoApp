$(() => {
  $("#add").click((e) => {
    target = document.getElementById("input").value;
    let newItem = {
      name: target,
    };
    $.ajax({
      type: "POST",
      url: "/",
      data: newItem,
      success: (data) => {
        location.reload();
      },
    });
    return false;
  });

  $("li button").click((e) => {
    let target = e.target || e.srcElement;
    target = target.className;
    $.ajax({
      type: "DELETE",
      url: "/" + target,
      success: (data) => {
        location.reload();
      },
    });
  });
});
