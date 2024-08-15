export class Particle {
    constructor(id, parent) {
        this.parent = parent;
        this.id = id;
        this.position = { x: 0, y: 0 };
        this.diameter = 0;
        this.life = 0; // Duration the particle stays alive
        this.speed = { x: 0, y: 0 };
        this.init();
    }

    init() {
        const interval = setInterval(() => {
            this.position.x += this.speed.x * 60 / 1000;
            this.position.y -= this.speed.y * 60 / 1000;
            this.life -= 1 / 60;
            if (this.life <= 0) {
                clearInterval(interval);
                this.parent.particles.delete(this.id);
            }
        }, 1000 / 60);
    }
}

export class ParticleSystem {
    constructor(canvas, size) {
        this.canvas = canvas;
        this.size = size;
        this.lastId = 0;
        this.ammount = 0;
        this.particles = new Map();
        this.diameter = { min: 0, max: 0 };
        this.life = { min: 0, max: 0 }; // Particle lifespan
        this.speed = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }; // Particle speed

        canvas.width = size.x;
        canvas.height = size.y;
    }

    static getRandomNumberInInterval(interval) {
        const min = Math.ceil(interval.min);
        const max = Math.floor(interval.max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    createParticle() {
        const particle = new Particle(this.lastId.toString(), this);
        particle.position.x = ParticleSystem.getRandomNumberInInterval({ min: 0, max: this.size.x });
        particle.position.y = ParticleSystem.getRandomNumberInInterval({ min: 0, max: this.size.y });
        particle.diameter = ParticleSystem.getRandomNumberInInterval(this.diameter);
        particle.life = ParticleSystem.getRandomNumberInInterval(this.life);
        particle.speed.x = ParticleSystem.getRandomNumberInInterval(this.speed.x);
        particle.speed.y = ParticleSystem.getRandomNumberInInterval(this.speed.y);
        this.particles.set(this.lastId.toString(), particle);
        this.lastId++;
    }

    init() {
        const ctx = this.canvas.getContext('2d');
        ctx.fillStyle = 'white';
        this.particles = new Map();
        for (let i = 0; i < this.ammount; i++)
            this.createParticle();

        setInterval(() => {
            if (this.particles.size <= this.ammount)
                this.createParticle();
        }, 1000 / 60);

        const draw = () => {
            ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.particles.forEach((particle) => {
                ctx?.beginPath();
                ctx?.arc(particle.position.x, particle.position.y, particle.diameter / 2, 0, 2 * Math.PI, false);
                ctx?.closePath();
                ctx?.fill();
            });
            requestAnimationFrame(draw);
        };
        draw();
    }
}
