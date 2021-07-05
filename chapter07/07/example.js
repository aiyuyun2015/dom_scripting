window.onload = function() {
  var para = document.createElement("p");
  var testdiv = document.getElementById("testdiv");
  testdiv.appendChild(para);
  var child1 = document.createTextNode("This is ");
  var em_node = document.createElement("em")
  var child2 = document.createTextNode("my");
  em_node.appendChild(child2)

  var child3 = document.createTextNode(" content");

  para.appendChild(child1);
  para.appendChild(em_node);
  para.appendChild(child3);
}
