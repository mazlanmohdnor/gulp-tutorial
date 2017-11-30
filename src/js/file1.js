function dataAttr(elem, key, data) {
    var name;

    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {
        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
        data = elem.getAttribute(name);

        if (typeof data === "string") {
            try {
                data = getData(data);
            } catch (e) {}

            // Make sure we set the data so it isn't changed later
            dataUser.set(elem, key, data);
        } else {
            data = undefined;
        }
    }
    return data;

    console.log('sdasdasdsd');
    console.log('test');
    console.log('test');
}