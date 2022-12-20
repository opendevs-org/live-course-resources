import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Box, Modal, CircularProgress, Stack, Typography, Button, TextField } from "@mui/material"
import { StorageService } from '../../services/storage'
import { BriefEntry } from '../../components/brief-entry'
import { FullEntry } from '../../components/full-entry'

const Homepage = () => {
  const [query, setQuery] = useSearchParams()
  const [openModal, setOpenModal] = useState(false)
  const [selectedEntry, setSelectedEntry] = useState(null)
  const [loading, setLoading] = useState(false)
  const [entries, setEntries] = useState([])
  const [tagSearch, setTagSearch] = useState('')

  const tags = query.get('tags')

  const onSearch = () => {
    const copy = new URLSearchParams(query)
    copy.set('tags', tagSearch)
    setQuery(copy)
  }

  const fetchEntries = () => {
    setLoading(true)
    const allEntries = StorageService.fetchAllEntries()
    setTimeout(() => {
      setEntries(allEntries)
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchEntries()
  }, [])

  return (
    <>
      <Stack direction="column" spacing={2}>
        <Typography variant="h2">All Entries</Typography>
        <Stack direction="row">
          <TextField placeholder='Tags' value={tagSearch} onChange={e => setTagSearch(e.target.value)} />
          <Button onClick={onSearch}>Search</Button>
        </Stack>
        { // ['abc', 'def']
          loading ? <CircularProgress /> : entries
            .filter(entry => tags == null ||tags === '' || entry.tags.split(',').map(x => x.trim()).some(x => x === tags))
            .map(entry => (
              <BriefEntry
                title={entry.title}
                tags={entry.tags}
                createdAt={entry.createdAt}
                onViewClick={() => {
                  setOpenModal(true)
                  setSelectedEntry(entry)
                }}
              />
            ))
        }
      </Stack>
      <Modal open={openModal}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ height: "100%" }}>
          <Box sx={{ width: "100%", maxWidth: "80vw" }}>
            {selectedEntry != null && (
              <FullEntry
                title={selectedEntry.title}
                tags={selectedEntry.tags}
                notes={selectedEntry.notes}
                createdAt={selectedEntry.createdAt}
                onClose={() => setOpenModal(false)}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export { Homepage }
