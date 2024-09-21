function Bind(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    console.log('originalMethod', originalMethod)
    console.log('descriptor this', this)
    console.log('descriptor', descriptor)

    descriptor.value = function (...args: any[]) {
        // Aseguramos que el método esté siempre enlazado al contexto del controlador
        return originalMethod.apply(this, args);
    };

    return {
        configurable: true,
        get() {
            // Enlaza el método al contexto del controlador cuando se accede a él
            return originalMethod.bind(this);
        }
    };
}

export { Bind };