var Minecraft = {};

Minecraft.Start = function () {
    Minecraft.initDisplay();
    Minecraft.use_shovel();
    Minecraft.use_axe();
    Minecraft.use_pickaxe();
    Minecraft.use_inventory();
    Minecraft.newGame();
    Minecraft.use_tree_inventory();
    Minecraft.use_wood_inventory();
    Minecraft.use_stone_inventory();
    Minecraft.use_land_inventory();
}
Minecraft.initDisplay = function () {
    Minecraft.matrix = [
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky'],
        ['sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'cloud', 'cloud', 'cloud', 'sky', 'sky', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'tree', 'tree', 'tree', 'tree', 'tree', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'wood', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'sky', 'sky', 'sky', 'sky', 'sky', 'stone', 'sky', 'wood', 'sky', 'sky', 'sky'],
        ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
        ['land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land'],
        ['land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land', 'land'],

    ];
    for (var i = 0; i < Minecraft.matrix.length; i++) {
        var line = $('<div>');
        var numberLine = "line" + i;
        line.attr('id', numberLine);
        line.addClass('line');

        for (var j = 0; j < Minecraft.matrix[i].length; j++) {
            var element = $('<div>');
            var classElt = Minecraft.matrix[i][j];
            element.addClass(classElt);
            element.addClass('elt');
            $(line).append(element);
        };
        $('.col-10').append(line);
    }

}

Minecraft.use_shovel = function () {
    $("body").off();
    $('#shovel').on('click', function () {
        $('#axe').off('click');
        $('#pickaxe').off('click')
        var landInventory = $("#land-inventory").text();
        landInventory = parseInt(landInventory);
        $('.land.elt').on('click', function () {
            $(this).removeClass('land');
            $(this).addClass('sky');
            landInventory += 1;
            $("#land-inventory").text(landInventory);
            $(event.target).off();
        });
        $('.grass.elt').on('click', function () {
            $(this).removeClass('grass');
            $(this).addClass('sky');
            landInventory += 1;
            $("#land-inventory").text(landInventory);
            $(event.target).off();

        });
    });
}

Minecraft.use_axe = function () {
    $("body").off();
    $('#axe').on('click', function () {
        $('#shovel').off('click');
        $('#pickaxe').off('click');
        var treeInventory = $("#tree-inventory").text();
        treeInventory = parseInt(treeInventory);
        $('.tree.elt').on('click', function () {
            $(this).removeClass('tree').addClass('sky');
            treeInventory += 1;
            $("#tree-inventory").text(treeInventory);
            $(event.target).off();
        })
        var woodInventory = $("#wood-inventory").text();
        woodInventory = parseInt(woodInventory);
        $('.wood.elt').on('click', function () {
            $(this).removeClass('wood').addClass('sky');
            woodInventory += 1;
            $("#wood-inventory").text(woodInventory);
            $(event.target).off();
        })
    })
}

Minecraft.use_pickaxe = function () {
    $("body").off();
    $('#pickaxe').on('click', function () {
        $('#axe').off('click');
        $('#shovel').off('click')
        var stoneInventory = $("#stone-inventory").text();
        stoneInventory = parseInt(stoneInventory);
        $('.stone.elt').on('click', function () {
            $(this).removeClass('stone');
            $(this).addClass('sky');
            stoneInventory += 1;
            $("#stone-inventory").text(stoneInventory);
            $(event.target).off();
        })
    })
}

Minecraft.use_tree_inventory = function () {
    $("#tree-inventory").click(function () {
        var treeInventory = $("#tree-inventory").text();
        treeInventory = parseInt(treeInventory);
        $(".sky").click(function () {
            if (treeInventory > 0) {
                $(this).removeClass().addClass('tree elt');
                treeInventory -= 1;
                $("#tree-inventory").text(treeInventory);
            }
        })
    })
}

Minecraft.use_wood_inventory = function () {
    $("#wood-inventory").click(function () {
        var woodInventory = $("#wood-inventory").text();
        woodInventory = parseInt(woodInventory);
        $(".sky").click(function () {
            if (woodInventory > 0) {
                $(this).removeClass().addClass('wood elt');
                woodInventory -= 1;
                $("#wood-inventory").text(woodInventory);
            }
        })
    })
}

Minecraft.use_stone_inventory = function () {
    $("#stone-inventory").click(function () {
        var stoneInventory = $("#stone-inventory").text();
        stoneInventory = parseInt(stoneInventory);
        $(".sky").click(function () {
            if (stoneInventory > 0) {
                $(this).removeClass().addClass('stone elt');
                stoneInventory -= 1;
                $("#stone-inventory").text(stoneInventory);
            }
        })
    })
}

Minecraft.use_land_inventory = function () {
    $("#land-inventory").click(function () {
        var landInventory = $("#land-inventory").text();
        landInventory = parseInt(landInventory);
        $(".sky").click(function () {
            if (landInventory > 0) {
                $(this).removeClass().addClass('land elt');
                landInventory -= 1;
                $("#land-inventory").text(landInventory);
            }
        })
    })
}

Minecraft.use_inventory = function () {
    $('.btn-inventory, btn-inventory.stone, btn-inventory.land, btn-inventory.grass, btn-inventory.tree, btn-inventory.wood').on('click', function () {
        style = $(this).attr('class');
        style = style.substring(13)
        $('.sky').one('click', function () {
            $(this).removeClass().addClass('elt')
            $(this).addClass(style);
            $('.sky').off();
            $('#inventory').addClass('empty');

        });
    });
}
Minecraft.newGame = function () {
    $('#new').click(function () {
        location.reload();
    });
}

Minecraft.Start();
