export class Container {
    private services: Map<string, any> = new Map();

    register<T>(identifier: string, constructor: new (...args: any[]) => T, dependencies: string[] = []) {
        if (this.services.has(identifier)) {
            throw new Error(`El servicio ${identifier} ya está registrado.`);
        }
        const deps = dependencies.map(dep => this.resolve(dep));
        const instance = new constructor(...deps);
        this.services.set(identifier, instance);
    }

    resolve<T>(identifier: string): T {
        const service = this.services.get(identifier);
        console.log('service', service)
        if (!service) {
            console.log('services', this.services)
            throw new Error(`El servicio ${identifier} no está registrado.`);
        }
        return service;
    }
}

export const container = new Container();