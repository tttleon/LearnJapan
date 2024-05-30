function japanruby(content: string) {
  function getChar(sentence: string, start: number, len?: number) {
    var lenstr = len == undefined ? "*" : ("{" + len + "}");
    var re = new RegExp("(.[ゅょゃュョャ]?){" + start + "}((.[ゅょゃュョャ]?)" + lenstr + ")");
    var result = re.exec(sentence)[2];
    return result;
  }
  try {
    if (content.indexOf('!') >= 0) {
      content = content.replace(/!(.*?)\((.*?)\)/g, '<rt></rt>$1<rt>$2</rt>');
      return '<ruby>' + content + '</ruby>';
    } else if (content.indexOf('@') >= 0) {
      // support convert text with accent like `おふろ@2に@はいります@4`
      var re = /([\u3040-\u309f\u30a0-\u30ff]*)@((?:\d{1,2})?)/g;
      return content.replace(re, function (_, sen, num) {
        if (num == undefined || num == "") {
          return sen;
        } else if (num == 0) {
          return getChar(sen, 0, 1)
            + "<span class='accent0'>" + getChar(sen, 1) + "</span>";
        } else if (num == 1) {
          return "<span class='accent'>" + getChar(sen, 0, 1) + "</span>"
            + getChar(sen, num);
        } else {
          const charactersNum = countJapaneseCharacters(sen);
          console.log('sen',sen)
          console.log('charactersNum',charactersNum)
          console.log('num',num)
          return getChar(sen, 0, 1)
            + "<span class='accent'>" + getChar(sen, 1, num - 1) + "</span>"
            + getChar(sen, num) + `${charactersNum === Number(num) ? '(尾高)' : ''}`;
        }
      });
    }
  }
  catch(err) {
    console.error('error parsing "' + content + '"', err);
  }
  return content;
}

// 计算日文字符的个数，拗音算一个字符
function countJapaneseCharacters(str) {
  // 匹配【ゃゅょャュョ】以及它们前面的一个字
  const regex = /[きしちにひみりぎじぢびぴキシチニヒミリギジヂビピ][ゃゅょャュョ]|./g;
  // 使用正则表达式匹配所有的字
  const matches = str.match(regex);
  // 返回匹配的个数
  return matches ? matches.length : 0;
}
