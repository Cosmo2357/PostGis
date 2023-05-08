# PostGIS & Express

Typescript porting of the great S2 Geometry library from Google
https://github.com/vekexasia/nodes2-ts

aboutPostGIS table with Prisma ORM.. not sure about the details yet
https://freddydumont.com/blog/prisma-postgis

not sure how to see PostGIS filed in Prisma Studio.  You can check it in PGAdmin. 

## Prisma ORM
```
npx prisma init: Initializes a new Prisma project.
npx prisma migrate dev: Runs migrations in development mode.
npx prisma migrate deploy: Deploys migrations to the production environment.
npx prisma introspect: Retrieves the schema from the database and maps it to the Prisma model.
npx prisma generate: Generates TypeScript type definitions and Prisma Client from the Prisma model.
npx prisma studio: Launches Prisma Studio, a browser-based GUI tool.
npx prisma format: Formats the Prisma schema.
```
## Terraform 

```
terraform init: Initializes a Terraform project.
terraform plan: Creates a Terraform execution plan to show which resources will be created, modified, or deleted.
terraform apply: Modifies or creates the AWS infrastructure based on the Terraform execution plan.
terraform destroy: Deletes the AWS resources created by Terraform.
terraform validate: Validates the Terraform code.
terraform fmt: Formats the Terraform code.
terraform state list: Lists the resources saved in the Terraform state file.
```

## PG admin

### 🚨Note: When connecting to the database, specify the container name instead of localhost.

