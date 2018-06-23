(function() {

    var __hs_cta_json = {"css":"a#cta_button_742943_4235d29f-c9d9-421e-98f9-bb935f3693d5 {\n  cursor:pointer; \n}\na#cta_button_742943_4235d29f-c9d9-421e-98f9-bb935f3693d5:hover {\n}\na#cta_button_742943_4235d29f-c9d9-421e-98f9-bb935f3693d5:active, #cta_button_742943_4235d29f-c9d9-421e-98f9-bb935f3693d5:active:hover {\n}\n\n","image_html":"<a id=\"cta_button_742943_4235d29f-c9d9-421e-98f9-bb935f3693d5\" class=\"cta_button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=4235d29f-c9d9-421e-98f9-bb935f3693d5&placement_guid=a0a2c69c-c64e-4bd7-ae42-9a1d4955c4e5&portal_id=742943&redirect_url=APefjpFm-pJtJxPs2B4Gjlkx8WR34r7OMTo7L7kQmR2HPWaRievatvCATKeaajxKS5kCOE2Y1mbEiVLucSApUpxGhfO_5W4x65iiE3OYjNcrr7sCBkxyZLODV-qwt4oGHTL-bmz4ncda&hsutk=c7a0000018cd105e1f110164043e8166&canon=https%3A%2F%2Fwww.losant.com%2Fblog%2Fmaking-the-esp8266-low-powered-with-deep-sleep&click=4b43fee2-08b1-4267-bf36-4d3fd1922a7f&utm_referrer=https%3A%2F%2Fwww.google.com%2F&pageId=4943300655\"  cta_dest_link=\"https://accounts.losant.com/create-account\"><img id=\"hs-cta-img-a0a2c69c-c64e-4bd7-ae42-9a1d4955c4e5\" class=\"hs-cta-img button sign-up-button\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Sign Up\" src=\"https://cdn2.hubspot.net/hubshot/17/06/13/7efa6722-5e72-4851-a635-26b67937af75.png\" /></a>","is_image":false,"placement_element_class":"hs-cta-a0a2c69c-c64e-4bd7-ae42-9a1d4955c4e5","raw_html":"<a id=\"cta_button_742943_4235d29f-c9d9-421e-98f9-bb935f3693d5\" class=\"cta_button button sign-up-button\" href=\"https://cta-service-cms2.hubspot.com/ctas/v2/public/cs/c/?cta_guid=4235d29f-c9d9-421e-98f9-bb935f3693d5&placement_guid=a0a2c69c-c64e-4bd7-ae42-9a1d4955c4e5&portal_id=742943&redirect_url=APefjpFm-pJtJxPs2B4Gjlkx8WR34r7OMTo7L7kQmR2HPWaRievatvCATKeaajxKS5kCOE2Y1mbEiVLucSApUpxGhfO_5W4x65iiE3OYjNcrr7sCBkxyZLODV-qwt4oGHTL-bmz4ncda&hsutk=c7a0000018cd105e1f110164043e8166&canon=https%3A%2F%2Fwww.losant.com%2Fblog%2Fmaking-the-esp8266-low-powered-with-deep-sleep&click=4b43fee2-08b1-4267-bf36-4d3fd1922a7f&utm_referrer=https%3A%2F%2Fwww.google.com%2F&pageId=4943300655\"  style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://accounts.losant.com/create-account\" title=\"Sign Up\">Sign Up</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }

            html = __hs_cta_json.raw_html;
        }

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('a0a2c69c-c64e-4bd7-ae42-9a1d4955c4e5');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', 'a0a2c69c-c64e-4bd7-ae42-9a1d4955c4e5', '4235d29f-c9d9-421e-98f9-bb935f3693d5']);
}());
