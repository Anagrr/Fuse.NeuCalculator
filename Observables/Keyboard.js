function ButtonsRow (opts) {
        return { buttons : opts.buttons || [] };
}

function Button(opts) {
    return {
        title : opts.title || '',
        color : opts.color || '#666',
        size : opts.size || "70",
    };
};

var colors = {
    DarkShadow: "#A3B1C6",
    LightRed: "#ef958c",
    Black: "#000"
};

var generateKeyboard = function() {
    let board = {
        colors,
        rows : [
            new ButtonsRow({
                buttons:[
                    new Button({title: "AC", color: colors.DarkShadow}),
                    new Button({title: "+/-", color: colors.DarkShadow}),
                    new Button({title: "%", color: colors.DarkShadow}),
                    new Button({title: "/", color: colors.LightRed})
                ]
            }),
            new ButtonsRow({
                buttons:[
                    new Button({title: "7"}),
                    new Button({title: "8"}),
                    new Button({title: "9"}),
                    new Button({title: "x", color: colors.LightRed})
                ]
            }),
            new ButtonsRow({
                buttons:[
                    new Button({title: "4"}),
                    new Button({title: "5"}),
                    new Button({title: "6"}),
                    new Button({title: "-", color: colors.LightRed})
                ]
            }),
            new ButtonsRow({
                buttons:[
                    new Button({title: "1"}),
                    new Button({title: "2"}),
                    new Button({title: "3"}),
                    new Button({title: "+", color: colors.LightRed})
                ]
            }),
            new ButtonsRow({
                buttons:[
                    new Button({title: "0", size: "160,70"}),
                    new Button({title: "."}),
                    new Button({title: "=", color: colors.LightRed})
                ]
            }),
        ],
        spacing : 20
    }

    board.rowsCount = board.rows.length;

    return board;
};

module.exports.Keyboard = generateKeyboard();