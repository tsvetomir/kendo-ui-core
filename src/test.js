function foo(options) {
  var url = options.url;

  url += $.map(options.data, function(value, key) {
    return key + "=" + value;
  }).join("&");

  location.href = url;
}

function appendContent(tbody, table, html, empty) {
    var placeholder, tmp = tbody;
    if (empty) {
        tbody.empty();
    }
    tbody[0].innerHTML = html;
    return tbody;
}

function moveContents(node, container) {
    var tmp;
    while (node && node.nodeName.toLowerCase() != 'ul') {
        tmp = node;
        node = node.nextSibling;
        if (tmp.nodeType == 3) {
            tmp.nodeValue = kendo.trim(tmp.nodeValue);
        }
        if (spriteRe.test(tmp.className)) {
            container.insertBefore(tmp, container.firstChild);
        } else {
            container.appendChild(tmp);
        }
    }
}

