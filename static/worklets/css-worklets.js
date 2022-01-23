
registerPaint('round-corner', class {    
    static get inputProperties() { 
        return ['border-color', 'padding'] 
    }

    paint(ctx, size, props) {
        const color = props.get('border-color');
        const radius = 16;
        const { height, width } = size

        ctx.fillStyle = color;

        ctx.beginPath()
        
        ctx.moveTo(0,0);
        ctx.arc(0, 0, radius, radius, 0, Math.PI * 2)
        ctx.moveTo(width, height)
        ctx.arc(width, height, radius, radius,  0, Math.PI * 2)
        ctx.moveTo(0, height)
        ctx.arc(0, height, radius, radius,  0, Math.PI * 2)
        ctx.moveTo(width, 0)
        ctx.arc(width, 0, radius, radius,  0, Math.PI * 2)

        ctx.stroke()
        ctx.fill()
    }
  }
);
