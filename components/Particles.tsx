import React, { useRef, useEffect } from 'react'

interface Props {

}

const Canvas = (props: Props) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const canvas = canvasRef?.current as any
        const context = canvasRef.current?.getContext("2d") as any

        canvas.width = innerWidth
        canvas.height = innerHeight

        function randomIntFromRange(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function randomColor(colors: string | any[]) {
            return colors[Math.floor(Math.random() * colors.length)]
        }

        function distance(x1: number, y1: number, x2: number, y2: number) {
            const xDist = x2 - x1
            const yDist = y2 - y1

            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
        }


        const mouseL: any = {
            x: null,
            y: null,
            radius: 50,
        }

        const lotusF: any = {
            x: null,
            y: null,
            radius: null
        }

        addEventListener('resize', () => {
            canvas.width = innerWidth
            canvas.height = innerHeight

            init()
        })

        // Objects
        class ParticleW {
            x: number
            y: number
            radius: number
            color: string
            dirX: number
            dirY: number
            constructor(x: number, y: number, dirX: number, dirY: number, radius: number, color: string) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.color = color;
                this.dirX = dirX;
                this.dirY = dirY;
            }

            draw() {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                context.fillStyle = this.color;
                context.fill()
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.dirX = -this.dirX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.dirY = -this.dirY;
                }
                if (this.x > canvas.width + 10 || this.x < 0 - 10) {
                    this.x = canvas.width / 2;
                }
                if (this.y > canvas.height + 10 || this.y < 0 - 10) {
                    this.y = canvas.height / 2;
                }

                let dx = mouseL.x - this.x;
                let dy = mouseL.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseL.radius + this.radius) {
                    let dir = Math.atan2(dx, dy);
                    let nx = dx / distance;
                    let ny = dy / distance;
                    if (mouseL.x < this.x && this.x < canvas.width - this.radius * 5) {
                        this.x = mouseL.x + nx * (mouseL.radius + this.radius);
                    }
                    if (mouseL.x > this.x && this.x > this.radius * 5) {
                        this.x = mouseL.x - nx * (mouseL.radius + this.radius);
                    }
                    if (mouseL.y < this.y && this.y < canvas.height - this.radius * 5) {
                        this.y = mouseL.y + ny * (mouseL.radius + this.radius);
                    }
                    if (mouseL.y > this.y && this.y > this.radius * 5) {
                        this.y = mouseL.y - ny * (mouseL.radius + this.radius);
                    }
                }

                let fx = lotusF.x - this.x;
                let fy = lotusF.y - this.y;
                let distF = Math.sqrt(fx * fx + fy * fy);

                this.x += this.dirX / 3;
                this.y += this.dirY / 3;
                this.draw()
            }
        }

        function connect() {
            let opacityValue = 1;
            for (let a = 0; a < particlesW.length; a++) {
                for (let b = a; b < particlesW.length; b++) {
                    let distance = ((particlesW[a].x - particlesW[b].x) * (particlesW[a].x - particlesW[b].x)) + ((particlesW[a].y - particlesW[b].y) * (particlesW[a].y - particlesW[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        context.strokeStyle = 'rgba(200,245,245,' + opacityValue + ')';
                        context.lineWidth = 0.3;
                        context.beginPath();
                        context.moveTo(particlesW[a].x, particlesW[a].y);
                        context.lineTo(particlesW[b].x, particlesW[b].y);
                        context.stroke();
                    }
                }
            }
        }

        let particlesW: {
            update: any, y: any , x: any 
}[]
        function init() {
            particlesW = []
            let numPart = (Math.round(innerWidth / 8));
            for (let i = 0; i < numPart; i++) {
                let radiusP = (Math.random() * 3);
                let x = (Math.random() * innerWidth - (radiusP * 2) + radiusP * 2);
                let y = (Math.random() * innerHeight - (radiusP * 2) + radiusP * 2);
                let dirX = (Math.random() * 5) - 2.5;
                let dirY = (Math.random() * 5) - 2.5;
                let color = (randomColor(["#FFF", "#12DD88", "#129988"]))
                particlesW.push(new ParticleW(x, y, dirX, dirY, radiusP, color))
            }
        }

        // Animation Loop
        function animate() {
            requestAnimationFrame(animate)
            context.clearRect(0, 0, innerWidth, innerHeight);

            particlesW.forEach(particle => {
                setTimeout(
                    particle.update()
                    , 0)
            });
            connect();
        }

        init()
        animate()
    }, [])

    return (
        <div className="absolute top-0 left-0 z-0 flex w-full h-full justify-center items-center">
            <canvas ref={canvasRef} {...props} />
        </div>
    )
}

export default Canvas