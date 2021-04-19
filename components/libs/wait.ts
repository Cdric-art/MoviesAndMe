export function wait (duration: number): Promise<any> {
    return new Promise(resolve => {
        window.setTimeout(resolve, duration)
    })
}
