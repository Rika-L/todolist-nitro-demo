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
    }
}

export default useRes
