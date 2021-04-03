// ==UserScript==
// @name         Custom RoutineHub
// @version      1.0.0
// @description  Make RoutineHub look great!
// @author       SpaceNeb
// @match        *://routinehub.co/*
// @grant        none
// @icon         https://s3.us-west-002.backblazeb2.com/routinehub/static/icon/favicon-32x32.png
// ==/UserScript==

(function() {
    'use strict';
    window.addEventListener('load', function () {
    	/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
		var twemoji=function(){"use strict";var twemoji={base:"https://twemoji.maxcdn.com/v/13.0.2/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:fromCodePoint,toCodePoint:toCodePoint},onerror:function onerror(){if(this.parentNode){this.parentNode.replaceChild(createText(this.alt,false),this)}},parse:parse,replace:replace,test:test},escaper={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},re=/(?:\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,UFE0Fg=/\uFE0F/g,U200D=String.fromCharCode(8205),rescaper=/[&<>'"]/g,shouldntBeParsed=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,fromCharCode=String.fromCharCode;return twemoji;function createText(text,clean){return document.createTextNode(clean?text.replace(UFE0Fg,""):text)}function escapeHTML(s){return s.replace(rescaper,replacer)}function defaultImageSrcGenerator(icon,options){return"".concat(options.base,options.size,"/",icon,options.ext)}function grabAllTextNodes(node,allText){var childNodes=node.childNodes,length=childNodes.length,subnode,nodeType;while(length--){subnode=childNodes[length];nodeType=subnode.nodeType;if(nodeType===3){allText.push(subnode)}else if(nodeType===1&&!("ownerSVGElement"in subnode)&&!shouldntBeParsed.test(subnode.nodeName.toLowerCase())){grabAllTextNodes(subnode,allText)}}return allText}function grabTheRightIcon(rawText){return toCodePoint(rawText.indexOf(U200D)<0?rawText.replace(UFE0Fg,""):rawText)}function parseNode(node,options){var allText=grabAllTextNodes(node,[]),length=allText.length,attrib,attrname,modified,fragment,subnode,text,match,i,index,img,rawText,iconId,src;while(length--){modified=false;fragment=document.createDocumentFragment();subnode=allText[length];text=subnode.nodeValue;i=0;while(match=re.exec(text)){index=match.index;if(index!==i){fragment.appendChild(createText(text.slice(i,index),true))}rawText=match[0];iconId=grabTheRightIcon(rawText);i=index+rawText.length;src=options.callback(iconId,options);if(iconId&&src){img=new Image;img.onerror=options.onerror;img.setAttribute("draggable","false");attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&!img.hasAttribute(attrname)){img.setAttribute(attrname,attrib[attrname])}}img.className=options.className;img.alt=rawText;img.src=src;modified=true;fragment.appendChild(img)}if(!img)fragment.appendChild(createText(rawText,false));img=null}if(modified){if(i<text.length){fragment.appendChild(createText(text.slice(i),true))}subnode.parentNode.replaceChild(fragment,subnode)}}return node}function parseString(str,options){return replace(str,function(rawText){var ret=rawText,iconId=grabTheRightIcon(rawText),src=options.callback(iconId,options),attrib,attrname;if(iconId&&src){ret="<img ".concat('class="',options.className,'" ','draggable="false" ','alt="',rawText,'"',' src="',src,'"');attrib=options.attributes(rawText,iconId);for(attrname in attrib){if(attrib.hasOwnProperty(attrname)&&attrname.indexOf("on")!==0&&ret.indexOf(" "+attrname+"=")===-1){ret=ret.concat(" ",attrname,'="',escapeHTML(attrib[attrname]),'"')}}ret=ret.concat("/>")}return ret})}function replacer(m){return escaper[m]}function returnNull(){return null}function toSizeSquaredAsset(value){return typeof value==="number"?value+"x"+value:value}function fromCodePoint(codepoint){var code=typeof codepoint==="string"?parseInt(codepoint,16):codepoint;if(code<65536){return fromCharCode(code)}code-=65536;return fromCharCode(55296+(code>>10),56320+(code&1023))}function parse(what,how){if(!how||typeof how==="function"){how={callback:how}}return(typeof what==="string"?parseString:parseNode)(what,{callback:how.callback||defaultImageSrcGenerator,attributes:typeof how.attributes==="function"?how.attributes:returnNull,base:typeof how.base==="string"?how.base:twemoji.base,ext:how.ext||twemoji.ext,size:how.folder||toSizeSquaredAsset(how.size||twemoji.size),className:how.className||twemoji.className,onerror:how.onerror||twemoji.onerror})}function replace(text,callback){return String(text).replace(re,callback)}function test(text){re.lastIndex=0;var result=re.test(text);re.lastIndex=0;return result}function toCodePoint(unicodeSurrogates,sep){var r=[],c=0,p=0,i=0;while(i<unicodeSurrogates.length){c=unicodeSurrogates.charCodeAt(i++);if(p){r.push((65536+(p-55296<<10)+(c-56320)).toString(16));p=0}else if(55296<=c&&c<=56319){p=c}else{r.push(c.toString(16))}}return r.join(sep||"-")}}();
    	var newlogo = "data:image/png;base64,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";
		let s=document.createElement("style");
		s.textContent=`
			:root {
				--color1: #fff;
				--color2: #090909;
				--color3: #f9f9f9;
				--color4: #f4f4f4;
				--color5: #131313;
				--color6: #7df9ff;
				--color7: #191919;
				--color8: #f1f1f1;
				--color9: #f2f2f2;
				--color0: #161616;
				--color11: #232323;
				--color12: #f6f6f6;
				--color13: #363636;
				--color14: #f4f4f4;
			}
			@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
			h1, h2, h3, h4, h5, h6, .title, .card-header-title, .file-label, .banner .text strong {
				font-family: 'Open Sans', sans-serif !important;
			}
			:not(i) {
				font-family: 'Roboto', sans-serif !important;
			}

			.custom_rh_color {
				color: var(#fff) !important;
			}
			.shortcut-icon {
				background: none !important;
				border: none !important;
				box-shadow: none !important;
			}
			a {
				font-weight: bold !important;
			}
			a.is-dark:link, a.is-dark:hover, a.is-dark:visited, a.is-dark:active, .is-dark {
				background: var(--color2) !important;
				color: var(--color3) !important;
			}
			a.is-primary:link, a.is-primary:hover, a.is-primary:visited, a.is-primary:active, .is-primary {
				background: var(--color6) !important;
				color: var(--color2) !important;
			}
			strong, select, p, .table th, th, thead, .table {
				color: var(--color4);
			}
			option, .input, .textarea, .file-label, .table, .file-cta, .card-header-title, .card_content, .card {
				background: var(--color5);
				color: var(--color4);
			}
			#content {
				background: var(--color7);
			}
			.title, .column, .sidebar {
				color: var(--color8) !important;
			}
			a:hover, a:link, a:visited, a:active {
				color: var(--color9) !important;
			}
			.navbar-brand, .navbar-menu, .navbar, .ethad-container {
				background: var(--color0) !important;
			}
			a.navbar-item:hover {
				background: var(--color11) !important;
			}
			i, .navbar-burger {
				color: var(--color12) !important;
			}
			.banner .text strong {
				color: var(--color13) !important;
			}
			label, th, h1,h2,h3,h4,h5,h6 {
				color: var(--color14) !important;
			}
			.footer {
				background-color: var(--color5) !important;
			}
			.card {
				border-radius: 16px !important;
				border: none !important;
				box-shadow: none !important;
				color: #fff !important;
			}
			img.emoji {
				width: 1em !important;
				height: 1em !important;
			}
			.tag {
				background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
				background-size: 1800% 1800%;
				-webkit-animation: rainbow 18s ease infinite;
				-z-animation: rainbow 18s ease infinite;
				-o-animation: rainbow 18s ease infinite;
				animation: rainbow 18s ease infinite;
				color: #fff !important;
				border-radius: 8px !important;
			}
			i.fas.fa-square.fa-stack-2x {
				display: none !important;
			}
			a.tag {
				text-decoration: none !important;
			}
			div.search.has-background-white-ter {
				background: #181818 !important;
			}
			@-webkit-keyframes rainbow {
			    0%{background-position:0% 82%}
			    50%{background-position:100% 19%}
			    100%{background-position:0% 82%}
			}
			@-moz-keyframes rainbow {
			    0%{background-position:0% 82%}
			    50%{background-position:100% 19%}
			    100%{background-position:0% 82%}
			}
			@-o-keyframes rainbow {
			    0%{background-position:0% 82%}
			    50%{background-position:100% 19%}
			    100%{background-position:0% 82%}
			}
			@keyframes rainbow {
			    0%{background-position:0% 82%}
			    50%{background-position:100% 19%}
			    100%{background-position:0% 82%}
			}
		`;
		document.head.appendChild(s);
		var list = document.getElementsByClassName('shortcut-card');
		var i;
		for (i = 0; i < list.length; i++) {
		let color = String(list[i].children[0].offsetParent.children[0].children[0].children[0].children[0].className.split(' ')[3]).trim();
			if (color != 'undefined') {
				list[i].classList.add(color);
			    list[i].classList.add('ios12');
			}
		}
		function search(search, tag) {
			for (i = 0; i < document.getElementsByTagName('strong').length; i++) {
				if (document.getElementsByTagName('strong')[i].innerText == search) {
					if (window.location.href.search('notifications') != -1) {
						document.getElementsByTagName('strong')[i].parentElement.parentElement.innerHTML = '<a href="javascript:void(0)"><strong>' + search + '</strong></a>&nbsp;<a href="javascript:void(0)"><span class="tag is-primary">' + tag + '</span></a>';
					} else {
						document.getElementsByTagName('strong')[i].parentElement.parentElement.innerHTML = '<a href="https://routinehub.co/user/' + search + '"><strong>' + search + '</strong></a>&nbsp;<span class="tag is-primary">' + tag + '</span>';
					}
				}
			}
		}
		search('@SpaceNeb', 'Custom RH');
		search('@ActuallyZach', 'Jellycuts');

		document.getElementsByClassName('navbar-item')[0].children[0].src = newlogo;
		twemoji.parse(document.body);
		console.warn(`\n .d8888b.                 888                        8888888b. 888    888 \nd88P  Y88b                888                        888   Y88b888    888 \n888    888                888                        888    888888    888 \n888       888  888.d8888b 888888 .d88b. 88888b.d88b. 888   d88P8888888888 \n888       888  88888K     888   d88""88b888 "888 "88b8888888P" 888    888 \n888    888888  888"Y8888b.888   888  888888  888  888888 T88b  888    888 \nY88b  d88PY88b 888     X88Y88b. Y88..88P888  888  888888  T88b 888    888 \n "Y8888P"  "Y88888 88888P' "Y888 "Y88P" 888  888  888888   T88b888    888  \nCustomRH Loaded!`);
    }, false);
})();