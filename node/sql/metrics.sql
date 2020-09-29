SELECT
	node_id,
	cpu_utilization,
	memory_utilization,
	disk_utilization,
	datetime
from
	metrics
ORDER BY node_id, datetime