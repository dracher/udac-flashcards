start:
	watchman watch-del-all && watchman shutdown-server && echo 1638400 | sudo tee /proc/sys/fs/inotify/max_user_watches && yarn start