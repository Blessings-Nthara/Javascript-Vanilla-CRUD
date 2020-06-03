window.onload = function () {
  document.getElementById("linkid").click();
};
// The screens for each activity will be uploaded soon.

var shopType = {
  Furniture: [
    "Bellona",
    "Saloni Mobilya",
    "Kargili Mobilya",
    "Nills Furniture Design",
  ],
  Museum: [
    "Denizli Museum",
    "Denizli Rag Doll House Museum",
    "Hierapolis Archaeology Museum",
    "Yeni camii",
  ],
  Restaurants: ["Miske", "Alo 24", "Pide Dunyası", "Wedo Köfte"],
  GiftShops: [
    "Geyik Design",
    "Denizli Esra Hediyelik ve Promosyon",
    "Hediyelik Denizli Horozu Satış Noktası",
    "Yağmur Hediyelik",
  ],
  PetShops: [
    "Aquarium Fish A.V.M.",
    "Denizli Twenty Petshop",
    "DENGE Petshop",
    "Amazon Akvaryum",
  ],
};

function viewContents(mainbackground, itemname, locationIcon, location) {
  var e = document.querySelector("ul");

  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }

  var banner = document.getElementsByClassName("food");
  var x = itemname;
  document
    .getElementsByClassName("header-img")[0]
    .setAttribute("style", "background-image:url(" + mainbackground + ")");
  banner[0].children[0].innerHTML = itemname;
  document
    .getElementsByClassName("food")[0]
    .children[1].children[0].setAttribute("src", locationIcon);
  document.getElementsByClassName(
    "food"
  )[0].children[1].children[1].innerHTML = location;

  if (shopType.hasOwnProperty(itemname)) {
    {
      for (var i = 0; i < shopType[itemname].length; i++) {
        var deleteButton = document.createElement("button");

        deleteButton.innerHTML = "Delete Me";
        var linkitem = document.createElement("a");
        linkitem.setAttribute("onClick", "edit(this)");
        linkitem.innerHTML = shopType[itemname][i];
        var tem = document.createElement("li");
        tem.appendChild(linkitem);
        tem.appendChild(deleteButton);
        tem.setAttribute("class", "item");
        var _text = document.getElementsByClassName("list")[0];
        _text.appendChild(tem);
        deleteButton.setAttribute("class", "dlt");
        deleteButton.setAttribute("onClick", "deleteMe(this)");
      }
    }
  }
}

function addnew() {
  if (document.getElementById("inpt").checkValidity()) {
    var _value = document.getElementById("inpt").value;
    var headname = document.getElementById("shop").innerHTML;
    if (shopType.hasOwnProperty(headname));
    {
      var linkk = document.createElement("a");

      linkk.innerHTML = _value;
      var l = document.createElement("li");
      l.setAttribute("class", "item");
      l.appendChild(linkk);
      var dd = document.createElement("button");
      dd.innerHTML = "Delete Me";
      dd.setAttribute("class", "dlt");

      shopType[headname].push(_value);

      document.getElementsByClassName("list")[0].appendChild(l);
      l.appendChild(dd);
      dd.setAttribute("onClick", "deleteMe(this)");
      document.getElementById("inpt").value = "";
    }
  } else {
    document.getElementById("demo").innerHTML = document.getElementById(
      "inpt"
    ).validationMessage;
  }
}

function deleteMe(_item) {
  var banner = document.getElementsByClassName("food");
  var prev = _item.previousElementSibling;
  var ch = _item.parentNode;
  var _value_ = prev.innerHTML;
  var _name_ = banner[0].children[0].innerHTML;
  for (var i = 0; i < shopType[_name_].length; i++) {
    if (shopType[_name_][i] == _value_) {
      shopType[_name_].splice(i, 1);
      console.log(shopType[_name_]);
      break;
    }
  }
  _item.parentNode.removeChild(prev);
  ch.removeChild(_item);
  ch.parentNode.removeChild(ch);
}

function edit(_val) {
  var _textbox = document.createElement("input");
  _textbox.setAttribute("type", "text");
  _textbox.value = _val.innerHTML;
  var item = _val;
  item.parentNode.replaceChild(_textbox, _val);
  _textbox.setAttribute("onfocus", "style.background='yellow'");
  _textbox.setAttribute("required", "true");

  var c = _textbox.value;
  _textbox.addEventListener("focusout", function () {
    update(this, c);
  });
}

function update(_h, old) {
  console.log(old);
  if (_h.checkValidity()) {
    for (
      var i = 0;
      i <
      shopType[document.getElementsByClassName("food")[0].children[0].innerHTML]
        .length;
      i++
    ) {
      if (
        shopType[
          document.getElementsByClassName("food")[0].children[0].innerHTML
        ][i] == old
      ) {
        shopType[
          document.getElementsByClassName("food")[0].children[0].innerHTML
        ][i] = _h.value;
        console.log("bless");
        break;
      }
    }
  }
  var link_ = document.createElement("a");
  link_.innerHTML = _h.value;
  var item = _h;
  item.parentNode.replaceChild(link_, item);
}
