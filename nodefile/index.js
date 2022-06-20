import fs from 'fs';
import PDFreader from 'pdf-parse';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read_Pdf_File = async () => {
    const Path_filename = path.join(__dirname,"lorem-ipsum.pdf");
    var read_file_path = fs.readFileSync(Path_filename);
    try {
        var extract_pdf_file = await PDFreader(read_file_path);
        //console.log(extract_pdf_file.text);
        return extract_pdf_file.text;
    }
    catch (err) {
        throw new Error;
    }
}
read_Pdf_File();
export default read_Pdf_File;