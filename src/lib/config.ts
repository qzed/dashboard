import YAML from 'yaml'
import { promises as fs } from 'fs';

export async function getConfig(type: string) {
    const path = process.cwd() + `/data/${type}.yaml`;

    var config: AppConfig = {
        categories: []
    };

    try {
        const data = (await fs.readFile(path)).toString('utf-8');
        config = YAML.parse(data);
    } catch (err) {
        console.log(`Error reading app config: ${err}`)
    }

    return config
}
