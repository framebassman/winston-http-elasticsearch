import winston from 'winston';

// import TransportElastic from 'framebassman-elasticsearch-transport';

// let dateString = new Date(new Date()).toISOString().split('T')[0];
// dateString = dateString.replaceAll('-', '.');

export const log = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.Console()
    // new TransportElastic({
    //   silent: false,
    //   elasticClient: {
    //     node: 'https://kolenka-inc-4135333449.eu-central-1.bonsaisearch.net:443',
    //     auth: {
    //       username: 'NX4jPVtxmC',
    //       password: 'QNw5bzyHoXC9YFkr'
    //     },
    //     headers: {
    //       'Content-type': 'application/json'
    //     }
    //   },
    //   index: `filebeat-7.10.2-${dateString}`
    // })
  ]
});
