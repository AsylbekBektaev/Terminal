cd /home/indigo24/docker_terminal/terminal/; sudo /sbin/sh  commands/docker_down.sh
if [ $? -eq 0 ]
then
  sudo  /sbin/sh  /var/www/indigo24.terminal/layouts/NV10Nocoin.sh
  echo "$?"
else
  echo "$?"
fi