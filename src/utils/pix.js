import QRCode from 'qrcode';


export async function gerarPixEQRCode({ chavePix, valor, nome }) {
// Payload estático simplificado para fins didáticos
const payload = `00020126580014BR.GOV.BCB.PIX0136${chavePix}5204000053039865405${Number(valor).toFixed(2)}5802BR59${nome?.length.toString().padStart(2,'0')}${nome}6009Sao Paulo62070503***6304ABCD`;
const dataUrl = await QRCode.toDataURL(payload);
return { linkPix: payload, qrcodeBase64: dataUrl.split(',')[1] };
}