
## 整理用的正则表达式

```
exe "normal my" | '<,'>s/∕//g | exe "normal \<C-V>`yI1:\<Esc>"
'<,'>s/\(.\{-}\):\(.\{-}\)\(（\(.\{-}\)）\)\? 〔\(.\{-}\)〕 \(.*\)/\2,\4,\5,\6,!\4(\2),\1,1/g | '<,'>s/!(\(.*\))/\1/g
'<,'>s/\(.\{-}\):\(.\{-}\)\(（\(.\{-}\)）\)\? \(.*\)/\2,\4,熟语,\5,!\4(\2),\1,1/g | '<,'>s/!(\(.*\))/\1/g


'<,'>s/!\(.*\)い(\(.*\)い)/!\1(\2)い/g
'<,'>s/!\(.*\)ます(\(.*\)ます)/!\1(\2)ます/g
'<,'>s/!\(.*\)します(\(.*\)します)/!\1(\2)します/g
'<,'>s/!\(.*\)り(\(.*\)り)/!\1(\2)り/g
'<,'>s/!\(.*\)し(\(.*\)し)/!\1(\2)し/g
'<,'>s/!\(.*\)け(\(.*\)け)/!\1(\2)け/g
'<,'>s/!お\(.*\)(お\(.*\))/お!\1(\2)  /g
'<,'>s/!ご\(.*\)(ご\(.*\))/ご!\1(\2)  /g
'<,'>s/!\(.*\)ま(\(.*\)ま)/!\1(\2)ま/g
'<,'>s/!\(.*\)わ(\(.*\)わ)/!\1(\2)わ/g


from excel version
'<,'>s/\(.\{-}\):\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t\(.\{-}\)\t/\3@\6,\4,\7,\5,!\4(\3),\1,1/g | '<,'>s/@,/,/g | '<,'>s/!(\(.*\))/\1/g
```

convert from result of <http://www.mori7.net/musi/ruby.php>
```
'<,'>s/＜/(/g | '<,'>s/＞/)/g | '<,'>s/＋/+/g | '<,'>s/(\(.\{-}\)+\(.\{-}\))/!\1(\2)/g | '<,'>s/!\([^!()]\{-}\)\([^!()]\{1}\)(\([^!()]\{-}\)　)/!\1(\3)\2/g | '<,'>s/!\([^!()]\{-}\)\([^!()]\{1}\)(\([^!()]\{-}\)　)/!\1(\3)\2/g | '<,'>s/!\([^!()]\{1}\)\([^!()]\{-}\)(　\([^!()]\{-}\))/\1!\2(\3)/g | '<,'>s/!\([^!()]\{1}\)\([^!()]\{-}\)(　\([^!()]\{-}\))/\1!\2(\3)/g | '<,'>s/!甲(かぶと)：/甲：/g | '<,'>s/!乙(おつ)：/乙：/g
```


## 尚未录入的单词

```
2:何なん～∕～歳さい
3:お～∕～階かい∕～円えん∕～曜日ようび
4:ご～
5:～時じ∕～分ふん∕～半はん∕～月がつ∕～日にち∕～年ねん∕ごろ
8:～様さま
9:～用よう
10:～中じゅう
12:～年間ねんかん
13:～冊さつ∕～回かい∕～枚まい∕～個こ∕～杯はい∕～人にん∕～台だい∕～本ほん∕～頭とう∕～匹ひき∕～つ∕～着ちゃく∕～羽わ∕～番ばん∕～足そく∕～度ど∕～キロメートル∕～皿さら
13:～時間じかん∕～週間しゅうかん∕～か月げつ
16:～製せい
16:～料りょう
16:～費ひ
16:～代だい
17:～中じゅうに
19:～たち
21:～過すぎ
22:～以外いがい∕～方かた
23:～によって∕～によります
24:～中ちゅう∕～について
```
