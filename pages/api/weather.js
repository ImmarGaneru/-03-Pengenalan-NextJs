export default async function handler(req, res) {
    const response = await fetch(`https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=35.73.05.1011`);
    const weathers = await response.json();

    res.status(200).json(weathers);
}