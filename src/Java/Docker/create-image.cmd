docker build --no-cache -f SQL\Dockerfile.PostgreSql -t onlajjn_magazin-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t onlajjn_magazin-java/app ../../..
