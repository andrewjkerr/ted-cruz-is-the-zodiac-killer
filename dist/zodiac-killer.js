/*
  Huge thanks to Brock Adams on Stack Overflow for his answer here: https://stackoverflow.com/questions/14046938/globally-replacing-text-on-a-page-breaks-garbles-it
*/

const TEXT_NODE       = 3;
const ELEMENT_NODE    = 1;

replaceTextValues(document.body, /ted cruz/gi, "The Zodiac Killer");
replaceTextValues(document.body, /tedcruz/g, "thezodiackiller");

function replaceTextValues (node, regex, replaceWith) {
    if (node.nodeType === TEXT_NODE) {
        node.nodeValue  = node.nodeValue.replace (regex, replaceWith);
    }
    else if (node.nodeType === ELEMENT_NODE) {
        for (var K = 0, numNodes = node.childNodes.length;  K < numNodes;  ++K) {
            replaceTextValues (node.childNodes[K], regex, replaceWith);
        }
    }
}
