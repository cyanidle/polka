import van from "mini-van-plate/van-plate"

const {h2, div,} = van.tags;

const main = (req: Request) => div(
    h2("HELLO!")
)

const doc = (req: Request) => `
<!DOCTYPE html>
<html>
<head>
    <title>Polka</title>
    <meta charset="utf-8">
    <script>
    
    </script>
</head>
<body>
    ${main(req).render()}
</body>
</html>
`

const server = Bun.serve({
    development: true,
    hostname: "0.0.0.0",
    port: 3000,
    fetch: async (req: Request) => {
        const res = new Response(doc(req));
        res.headers.append('Content-Type', 'text/html; charset=utf-8');
        return res;
    }
})

console.log(`Serving on http://${server.hostname}:${server.port} ...`)
