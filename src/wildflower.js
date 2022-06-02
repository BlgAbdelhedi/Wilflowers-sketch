
const PI = Math.PI

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let c = document.querySelector("#canvas")
let text = document.querySelector("#text_container")

let cw = c.width = window.innerWidth
let ch = c.height = window.innerHeight
const ctx = c.getContext("2d")
let branchCount = 0;

const colors = [
     "#fb8500",
     "#FFB703",
]
const MAX_BRANCHES = 100;


function branch(props) {
    let {
        x,
        y,
        thickness,
        width,
        loss,
        direction,
        angle,
        color
    } = props

    const proba = .9
    const amp = .025
    ctx.beginPath()
    ctx.moveTo(x, y)

    x += Math.cos(angle) * width
    y += -Math.sin(angle) * width

    ctx.strokeStyle = color
    ctx.lineWidth = thickness
    ctx.lineCap = 'butt'
    ctx.lineJoin = 'bevel'
    ctx.shadowColor = color
    ctx.shadowBlur = 10
    ctx.fillStyle = color
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.closePath()

    thickness *= loss
    width *= loss

    if (direction) {
        angle -= amp
    } else {
        angle += amp
    }



    if (Math.random() >= proba) {
        setTimeout(() => {
            branch({
                x,
                y,
                thickness,
                width: 1.4 * width,
                loss,
                direction: !direction,
                angle,
                color
            })
        }, 2)
    }

    if (width > 1) {
        branch({
            x,
            y,
            thickness,
            width,
            loss,
            direction,
            angle,
            color
        })
    }
}

(function draw(ci = 0) {
    if (branchCount < MAX_BRANCHES) {
        branch({
            x: cw / 2,
            y: ch + 5,
            thickness: 12,
            width: 35,
            loss: .9,
            direction: randInt(0, 1),
            angle: randInt(0, 16),
            color: colors[ci]
        })

        setTimeout(() => {
            if (ci === colors.length) draw()
            else draw(++ci)
            branchCount++
            text.innerHTML = ` ${branchCount} branches`
        }, 1)
    }
})()
