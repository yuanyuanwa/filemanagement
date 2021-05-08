const encrypt = function () {
    var array = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 80, 0, 0, 0, 47, 0, 110,
      65, 69, 115, 43, 0, 102, 113, 0, 55, 49,
      117, 78, 75, 74, 77, 57, 39, 109, 0, 0,
      0, 0, 0, 0, 0, 79, 86, 116, 84, 97,
      120, 72, 114, 99, 118, 108, 56, 70, 51, 111,
      76, 89, 106, 87, 42, 122, 90, 33, 66, 41,
      85, 0, 0, 0, 0, 121, 0, 40, 126, 105,
      104, 112, 95, 45, 73, 82, 46, 71, 83, 100,
      54, 119, 53, 48, 52, 68, 107, 81, 103, 98,
      67, 50, 88, 0, 0, 0, 101, 0
    ];
    var encodeArray = {};
    var decodeArray = {};
    for (var i = 0; i < array.length; i++) {
      var c = array[i];
      if (c) {
        var ic = String.fromCharCode(i);
        decodeArray[ic] = encodeArray[ic] = String.fromCharCode(c);
      }
    }
    decodeArray['/'] = '/';
    decodeArray['%'] = '%';
    function encode(data) {
      var dataArray = data.split('');
      for (var i = 0, len = dataArray.length; i < len; i++) {
        var e = encodeArray[dataArray[i]];
        dataArray[i] = e;
      }
      return "encode=" + dataArray.join('');
    }
    function decode(responseText) {
      if (responseText.length > 50000)
        return responseText;
      var responseArray = responseText.split('');
      for (var i = 0, len = responseArray.length; i < len; i++) {
        var d = decodeArray[responseArray[i]];
        if (d)
          responseArray[i] = d;
      }
      return responseArray.join('');
    }
    return {
      encode: encode,
      decode: decode
    };
  }()

export default encrypt