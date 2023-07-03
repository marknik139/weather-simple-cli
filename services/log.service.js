import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (err) => {
    console.log(chalk.bgRed('ERROR') + (' ' + err));
};

const printSuccess = (msg) => {
    console.log(chalk.bgGreen('SUCCESS') + (' ' + msg));
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgYellow('HELP')}
        Without params - weather output
        -s [CITY] for city saving
        -t [API_KEY] for token saving
        -h for help output
        `
    );
};

const printWeather = (resp, icon) => {
    console.log(
        dedent`${chalk.bgBlue('WEATHER')} Weather in the city ${resp.name}
        ${icon} ${resp.weather[0].description}
        Temperature: ${resp.main.temp} (feels like ${resp.main.feels_like})
        Humidity: ${resp.main.humidity}%
        Wind speed: ${resp.wind.speed}
        `
    );
};

export { printError, printSuccess, printHelp, printWeather };