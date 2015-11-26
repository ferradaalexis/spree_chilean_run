window.format_run = function(value) {
  var aRut, i, j, nPos, sInvertido, sRut, sRut1;
  nPos = 0;
  sRut1 = value;
  aRut = sRut1.split('-');
  sRut1 = aRut.join('');
  aRut = sRut1.split('.');
  sRut1 = aRut.join('');
  sInvertido = "";
  i = sRut1.length - 1;
  while (i >= 0) {
    sInvertido += sRut1.charAt(i);
    if (i === sRut1.length - 1) {
      sInvertido += "-";
    } else if (nPos === 3) {
      sInvertido += ".";
      nPos = 0;
    }
    nPos++;
    i--;
  }
  j = sInvertido.length - 1;
  sRut = "";
  while (j >= 0) {
    if (sInvertido.charAt(sInvertido.length - 1) !== ".") {
      sRut += sInvertido.charAt(j);
    } else {
      if (j !== sInvertido.length - 1) {
        sRut += sInvertido.charAt(j);
      }
    }
    j--;
  }
  return sRut.toUpperCase();
};

window.unformat_run = function(value) {
  var aRut, sRut;
  sRut = value;
  aRut = sRut.split('-');
  sRut = aRut.join('');
  aRut = sRut.split('.');
  sRut = aRut.join('');
  return sRut.toUpperCase();
};

window.attach_run_behavior = function() {
  $('.run').on('blur', function(event) {
    event.target.value = format_run(event.target.value);
  });
  $('.run').on('focus', function(event) {
    event.target.value = unformat_run(event.target.value);
  });
}

$(function () {
  attach_run_behavior();
});
