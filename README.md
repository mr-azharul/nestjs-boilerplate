<p align="center">
  <a href="https://github.com/mr-azharul/nestjs-boilerplate" target="blank"><img src="https://miro.medium.com/v2/resize:fit:875/1*JJt5oe-2rPU3s2cx_xUV5A.png" width="500" alt="NestJs Boilerplate" /></a>
</p>

<p align="center">A scalable, clean architecture, ready-to-use NestJs boilerplate</p>
<!-- <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
</p> -->

<!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description
This repository provides a boilerplate for building NestJS applications with TypeORM for database interactions and PostgreSQL as the database engine. It offers a solid foundation for rapid NestJS development.

## Features
* NestJS framework pre-configured
* TypeORM integration for data modeling and database access
* PostgreSQL database setup (configuration for local development)
* JWT authentication for protected API endpoints
* Role based authorization with role guard
* Password hasing with salt round
* Helmet for set security-related HTTP headers
* Rate Limit to protect applications from brute-force attacks

## Getting Started
1. Clone the Repository:
```Bash
  git clone https://github.com/mr-azharul/nestjs-boilerplate.git
```
2. Install Dependencies:
```Bash
cd nestjs-boilerplate
npm install
```
3. Configure Database (Local Development):
    1. Create a file named .env at the root of the project (ignore this file in version control).
    2. Add your PostgreSQL connection details to the .env file:

```Bash
DATABASE_PORT = 5432
DATABASE_NAME = "DBNAME"
DATABASE_HOST = "DBHOST"
DATABASE_USERNAME = "DBUSER"
DATABASE_PASSWORD = "DBPASSWORD"
```
Update the connection details if your PostgreSQL setup differs

4. Run the Application:
```Bash
npm run start
```
This will start the NestJS development server, typically accessible at http://localhost:4200 (port might vary).

## Project Structure
```bash
src/
├── app/                                          # Core application module
│   ├── modules/                                  # Feature modules for specific functionalities
│   │    ├── auth/
│   │    │    ├── controllers/
│   │    │    │    ├── auth.controller.spec.ts
│   │    │    │    └── auth.controller.ts
│   │    │    ├── dto/
│   │    │    │    └── signin.dto.ts
│   │    │    ├── entities/
│   │    │    │    └── auth.entity.ts
│   │    │    ├── services/
│   │    │    │    ├── auth.service.spec.ts
│   │    │    │    └── auth.service.ts
│   │    │    └── auth.module.ts
│   │    └── users/
│   │         └── ...
│   └── app.modules.ts                            # Entity files (modules)
├── common/                                       # Common modules, utilities, etc.
│   └── logger
│       ├── services/
│       │   └── logger.service.ts
│       └── logger.module.ts
├── config/                                       # Environment and configuration management
│   ├── cache/
│   ├── database/
│   │   └── postgres.ts
│   ├── configurations.ts
│   └── config.module.ts
├── core/                                         # Application core files
│   ├── decorators/
│   │   ├── auth.decorator.ts
│   │   └── role.decorator.ts
│   ├── execptions/
│   ├── filters/
│   ├── guards/
│   │   ├── auth.guard.ts
│   │   └── role.guard.ts
│   ├── interfaces/
│   ├── middlewares/
│   ├── pipes/
│   ├── providers/
│   ├── utils/
│   │   └── roles.ts
│   └── core.module.ts
├── database/                                     # Database migaration and seeder files
│   ├── migrations/
│   └── seeders/
├── jobs/                                         # Schedulers and Queue management
│   └── ...                                       # (customizable based on your needs)
└── main.ts                                       # Application entry point
```

## Customization
* Create new feature modules within the modules directory under app to organize your application logic.
* Define your database entities (models) in the entities directory of your module directory.
* Extend the app.module.ts to import your custom modules and configure the application further.

## Deployment
This boilerplate provides a starting point for local development. For production deployments, adapt the database configuration, environment variables, and security considerations to your specific hosting environment.

## License
This boilerplate is distributed under the [MIT licensed](LICENSE).

## Contributing
Feel free to fork the repository and contribute improvements. We appreciate pull requests!