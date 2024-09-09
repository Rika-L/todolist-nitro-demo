const useRes = {
    ok: function <T>(data?: T) {
        if (data) return {
            code: 200,
            msg: 'success',
            data: data
        }
        else return {
            code: 200,
            msg: 'success'
        }
    },
    error: function (code: number, msg: string) {
        return {
            code,
            msg
        }
    }
}

export default useRes
